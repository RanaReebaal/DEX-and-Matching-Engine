// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Faucet {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    event FallbackCalled(address);

    function withdraw(uint _amount) public payable {
        // users can only withdraw .1 ETH at a time, feel free to change this!
        require(_amount <= 100000000000000000);
        (bool sent, ) = msg.sender.call{value: _amount}("");
        require(sent, "Failed to send Ether");
    }

    function withdrawAll() public onlyOwner {
        (bool sent, ) = owner.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

    function close() public {
        require(msg.sender == owner);
        payable(address(this)).transfer(address(this).balance);
    }

    //  function will be invoked if msg contains no matching calldata
    receive() external payable {
        emit FallbackCalled(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}
