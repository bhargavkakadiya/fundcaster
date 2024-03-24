export const fundraiserABI = [
  {
    _format: "hh-sol-artifact-1",
    contractName: "FundRaiser",
    sourceName: "contracts/FundRaiser.sol",
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_fdId",
            type: "uint256",
          },
        ],
        name: "donate",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "donator",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "frCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "fundRaiser",
        outputs: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "target",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "donations",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "donationsLeft",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fdId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "castId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isAcceptingDonations",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_fdId",
            type: "uint256",
          },
        ],
        name: "killFundRaiser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_desc",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_target",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_castId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_fId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_fdId",
            type: "uint256",
          },
        ],
        name: "registerFundRaiser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_fdId",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        stateMutability: "payable",
        type: "receive",
      },
    ],
    bytecode:
      "0x6080604052600060035534801561001557600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506116d5806100666000396000f3fe60806040526004361061007f5760003560e01c8063c1bc7f771161004e578063c1bc7f7714610145578063ec7b732014610170578063f14faf6f14610199578063f8408c82146101b557610086565b80632e1a7d4d1461008b5780633a53c10c146100b45780638da5cb5b146100f1578063b7b09a411461011c57610086565b3661008657005b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610bb0565b6101fb565b005b3480156100c057600080fd5b506100db60048036038101906100d69190610c3b565b6103a5565b6040516100e89190610c8a565b60405180910390f35b3480156100fd57600080fd5b506101066103ca565b6040516101139190610cb4565b60405180910390f35b34801561012857600080fd5b50610143600480360381019061013e9190610bb0565b6103f0565b005b34801561015157600080fd5b5061015a6105d9565b6040516101679190610c8a565b60405180910390f35b34801561017c57600080fd5b5061019760048036038101906101929190610e15565b6105df565b005b6101b360048036038101906101ae9190610bb0565b610807565b005b3480156101c157600080fd5b506101dc60048036038101906101d79190610bb0565b6109d5565b6040516101f29a99989796959493929190610f74565b60405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461029e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102959061106a565b60405180910390fd5b600080600083815260200190815260200160002060040154146102f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ed906110d6565b60405180910390fd5b60008082815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600080848152602001908152602001600020600401549081150290604051600060405180830381858888f19350505050158015610386573d6000803e3d6000fd5b5060008060008381526020019081526020016000206004018190555050565b6001602052816000526040600020602052806000526040600020600091509150505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048a90611168565b60405180910390fd5b6001151560008083815260200190815260200160002060080160009054906101000a900460ff161515146104fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f3906111d4565b60405180910390fd5b600080600083815260200190815260200160002060080160006101000a81548160ff02191690831515021790555060008082815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600080848152602001908152602001600020600401549081150290604051600060405180830381858888f193505050501580156105ba573d6000803e3d6000fd5b5060008060008381526020019081526020016000206004018190555050565b60035481565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a90611240565b60405180910390fd5b85600080600354815260200190815260200160002060000190816106a7919061146c565b5084600080600354815260200190815260200160002060010190816106cc919061146c565b50836000806003548152602001908152602001600020600201819055506000806000600354815260200190815260200160002060030181905550600080600060035481526020019081526020016000206004018190555081600080600354815260200190815260200160002060050181905550826000806003548152602001908152602001600020600701819055506003546000806003548152602001908152602001600020600601819055506001600080600354815260200190815260200160002060080160006101000a81548160ff02191690831515021790555033600080600354815260200190815260200160002060080160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050565b6000341161084a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108419061158a565b60405180910390fd5b6001151560008083815260200190815260200160002060080160009054906101000a900460ff161515146108b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108aa9061161c565b60405180910390fd5b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000828254610913919061166b565b9250508190555034600080838152602001908152602001600020600301600082825461093f919061166b565b9250508190555034600080838152602001908152602001600020600401600082825461096b919061166b565b925050819055506000808281526020019081526020016000206002015460008083815260200190815260200160002060030154106109d257600080600083815260200190815260200160002060080160006101000a81548160ff0219169083151502179055505b50565b60006020528060005260406000206000915090508060000180546109f89061128f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a249061128f565b8015610a715780601f10610a4657610100808354040283529160200191610a71565b820191906000526020600020905b815481529060010190602001808311610a5457829003601f168201915b505050505090806001018054610a869061128f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab29061128f565b8015610aff5780601f10610ad457610100808354040283529160200191610aff565b820191906000526020600020905b815481529060010190602001808311610ae257829003601f168201915b5050505050908060020154908060030154908060040154908060050154908060060154908060070154908060080160009054906101000a900460ff16908060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508a565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610b8d81610b7a565b8114610b9857600080fd5b50565b600081359050610baa81610b84565b92915050565b600060208284031215610bc657610bc5610b70565b5b6000610bd484828501610b9b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c0882610bdd565b9050919050565b610c1881610bfd565b8114610c2357600080fd5b50565b600081359050610c3581610c0f565b92915050565b60008060408385031215610c5257610c51610b70565b5b6000610c6085828601610c26565b9250506020610c7185828601610b9b565b9150509250929050565b610c8481610b7a565b82525050565b6000602082019050610c9f6000830184610c7b565b92915050565b610cae81610bfd565b82525050565b6000602082019050610cc96000830184610ca5565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d2282610cd9565b810181811067ffffffffffffffff82111715610d4157610d40610cea565b5b80604052505050565b6000610d54610b66565b9050610d608282610d19565b919050565b600067ffffffffffffffff821115610d8057610d7f610cea565b5b610d8982610cd9565b9050602081019050919050565b82818337600083830152505050565b6000610db8610db384610d65565b610d4a565b905082815260208101848484011115610dd457610dd3610cd4565b5b610ddf848285610d96565b509392505050565b600082601f830112610dfc57610dfb610ccf565b5b8135610e0c848260208601610da5565b91505092915050565b60008060008060008060c08789031215610e3257610e31610b70565b5b600087013567ffffffffffffffff811115610e5057610e4f610b75565b5b610e5c89828a01610de7565b965050602087013567ffffffffffffffff811115610e7d57610e7c610b75565b5b610e8989828a01610de7565b9550506040610e9a89828a01610b9b565b9450506060610eab89828a01610b9b565b9350506080610ebc89828a01610b9b565b92505060a0610ecd89828a01610b9b565b9150509295509295509295565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f14578082015181840152602081019050610ef9565b60008484015250505050565b6000610f2b82610eda565b610f358185610ee5565b9350610f45818560208601610ef6565b610f4e81610cd9565b840191505092915050565b60008115159050919050565b610f6e81610f59565b82525050565b6000610140820190508181036000830152610f8f818d610f20565b90508181036020830152610fa3818c610f20565b9050610fb2604083018b610c7b565b610fbf606083018a610c7b565b610fcc6080830189610c7b565b610fd960a0830188610c7b565b610fe660c0830187610c7b565b610ff360e0830186610c7b565b611001610100830185610f65565b61100f610120830184610ca5565b9b9a5050505050505050505050565b7f4f6e6c7920746865206f776e65722063616e2077697468647261770000000000600082015250565b6000611054601b83610ee5565b915061105f8261101e565b602082019050919050565b6000602082019050818103600083015261108381611047565b9050919050565b7f54686572652773206e6f74696e6720746f207769746864726177000000000000600082015250565b60006110c0601a83610ee5565b91506110cb8261108a565b602082019050919050565b600060208201905081810360008301526110ef816110b3565b9050919050565b7f4f6e6c79204f776e65722063616e206b696c6c207468652066756e647261697360008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000611152602283610ee5565b915061115d826110f6565b604082019050919050565b6000602082019050818103600083015261118181611145565b9050919050565b7f66756e64526169736572206973206e6f742061637469766520616e796d6f7265600082015250565b60006111be602083610ee5565b91506111c982611188565b602082019050919050565b600060208201905081810360008301526111ed816111b1565b9050919050565b7f496e76616c69642046756e647261697365722049640000000000000000000000600082015250565b600061122a601583610ee5565b9150611235826111f4565b602082019050919050565b600060208201905081810360008301526112598161121d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112a757607f821691505b6020821081036112ba576112b9611260565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026113227fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826112e5565b61132c86836112e5565b95508019841693508086168417925050509392505050565b6000819050919050565b600061136961136461135f84610b7a565b611344565b610b7a565b9050919050565b6000819050919050565b6113838361134e565b61139761138f82611370565b8484546112f2565b825550505050565b600090565b6113ac61139f565b6113b781848461137a565b505050565b5b818110156113db576113d06000826113a4565b6001810190506113bd565b5050565b601f821115611420576113f1816112c0565b6113fa846112d5565b81016020851015611409578190505b61141d611415856112d5565b8301826113bc565b50505b505050565b600082821c905092915050565b600061144360001984600802611425565b1980831691505092915050565b600061145c8383611432565b9150826002028217905092915050565b61147582610eda565b67ffffffffffffffff81111561148e5761148d610cea565b5b611498825461128f565b6114a38282856113df565b600060209050601f8311600181146114d657600084156114c4578287015190505b6114ce8582611450565b865550611536565b601f1984166114e4866112c0565b60005b8281101561150c578489015182556001820191506020850194506020810190506114e7565b868310156115295784890151611525601f891682611432565b8355505b6001600288020188555050505b505050505050565b7f596f75206e65656420746f2073656e6420736f6d652065746865720000000000600082015250565b6000611574601b83610ee5565b915061157f8261153e565b602082019050919050565b600060208201905081810360008301526115a381611567565b9050919050565b7f46756e647261697365722074617267657420616c72656164792072656163686560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611606602183610ee5565b9150611611826115aa565b604082019050919050565b60006020820190508181036000830152611635816115f9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061167682610b7a565b915061168183610b7a565b92508282019050808211156116995761169861163c565b5b9291505056fea264697066735822122032ad19ab33f83e6d2bcaa0401792936e1198f5d016dd4de9f8b0603c9f5b7d0a64736f6c63430008140033",
    deployedBytecode:
      "0x60806040526004361061007f5760003560e01c8063c1bc7f771161004e578063c1bc7f7714610145578063ec7b732014610170578063f14faf6f14610199578063f8408c82146101b557610086565b80632e1a7d4d1461008b5780633a53c10c146100b45780638da5cb5b146100f1578063b7b09a411461011c57610086565b3661008657005b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610bb0565b6101fb565b005b3480156100c057600080fd5b506100db60048036038101906100d69190610c3b565b6103a5565b6040516100e89190610c8a565b60405180910390f35b3480156100fd57600080fd5b506101066103ca565b6040516101139190610cb4565b60405180910390f35b34801561012857600080fd5b50610143600480360381019061013e9190610bb0565b6103f0565b005b34801561015157600080fd5b5061015a6105d9565b6040516101679190610c8a565b60405180910390f35b34801561017c57600080fd5b5061019760048036038101906101929190610e15565b6105df565b005b6101b360048036038101906101ae9190610bb0565b610807565b005b3480156101c157600080fd5b506101dc60048036038101906101d79190610bb0565b6109d5565b6040516101f29a99989796959493929190610f74565b60405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461029e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102959061106a565b60405180910390fd5b600080600083815260200190815260200160002060040154146102f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ed906110d6565b60405180910390fd5b60008082815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600080848152602001908152602001600020600401549081150290604051600060405180830381858888f19350505050158015610386573d6000803e3d6000fd5b5060008060008381526020019081526020016000206004018190555050565b6001602052816000526040600020602052806000526040600020600091509150505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048a90611168565b60405180910390fd5b6001151560008083815260200190815260200160002060080160009054906101000a900460ff161515146104fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f3906111d4565b60405180910390fd5b600080600083815260200190815260200160002060080160006101000a81548160ff02191690831515021790555060008082815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600080848152602001908152602001600020600401549081150290604051600060405180830381858888f193505050501580156105ba573d6000803e3d6000fd5b5060008060008381526020019081526020016000206004018190555050565b60035481565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a90611240565b60405180910390fd5b85600080600354815260200190815260200160002060000190816106a7919061146c565b5084600080600354815260200190815260200160002060010190816106cc919061146c565b50836000806003548152602001908152602001600020600201819055506000806000600354815260200190815260200160002060030181905550600080600060035481526020019081526020016000206004018190555081600080600354815260200190815260200160002060050181905550826000806003548152602001908152602001600020600701819055506003546000806003548152602001908152602001600020600601819055506001600080600354815260200190815260200160002060080160006101000a81548160ff02191690831515021790555033600080600354815260200190815260200160002060080160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050565b6000341161084a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108419061158a565b60405180910390fd5b6001151560008083815260200190815260200160002060080160009054906101000a900460ff161515146108b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108aa9061161c565b60405180910390fd5b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000828254610913919061166b565b9250508190555034600080838152602001908152602001600020600301600082825461093f919061166b565b9250508190555034600080838152602001908152602001600020600401600082825461096b919061166b565b925050819055506000808281526020019081526020016000206002015460008083815260200190815260200160002060030154106109d257600080600083815260200190815260200160002060080160006101000a81548160ff0219169083151502179055505b50565b60006020528060005260406000206000915090508060000180546109f89061128f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a249061128f565b8015610a715780601f10610a4657610100808354040283529160200191610a71565b820191906000526020600020905b815481529060010190602001808311610a5457829003601f168201915b505050505090806001018054610a869061128f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab29061128f565b8015610aff5780601f10610ad457610100808354040283529160200191610aff565b820191906000526020600020905b815481529060010190602001808311610ae257829003601f168201915b5050505050908060020154908060030154908060040154908060050154908060060154908060070154908060080160009054906101000a900460ff16908060080160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508a565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610b8d81610b7a565b8114610b9857600080fd5b50565b600081359050610baa81610b84565b92915050565b600060208284031215610bc657610bc5610b70565b5b6000610bd484828501610b9b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c0882610bdd565b9050919050565b610c1881610bfd565b8114610c2357600080fd5b50565b600081359050610c3581610c0f565b92915050565b60008060408385031215610c5257610c51610b70565b5b6000610c6085828601610c26565b9250506020610c7185828601610b9b565b9150509250929050565b610c8481610b7a565b82525050565b6000602082019050610c9f6000830184610c7b565b92915050565b610cae81610bfd565b82525050565b6000602082019050610cc96000830184610ca5565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d2282610cd9565b810181811067ffffffffffffffff82111715610d4157610d40610cea565b5b80604052505050565b6000610d54610b66565b9050610d608282610d19565b919050565b600067ffffffffffffffff821115610d8057610d7f610cea565b5b610d8982610cd9565b9050602081019050919050565b82818337600083830152505050565b6000610db8610db384610d65565b610d4a565b905082815260208101848484011115610dd457610dd3610cd4565b5b610ddf848285610d96565b509392505050565b600082601f830112610dfc57610dfb610ccf565b5b8135610e0c848260208601610da5565b91505092915050565b60008060008060008060c08789031215610e3257610e31610b70565b5b600087013567ffffffffffffffff811115610e5057610e4f610b75565b5b610e5c89828a01610de7565b965050602087013567ffffffffffffffff811115610e7d57610e7c610b75565b5b610e8989828a01610de7565b9550506040610e9a89828a01610b9b565b9450506060610eab89828a01610b9b565b9350506080610ebc89828a01610b9b565b92505060a0610ecd89828a01610b9b565b9150509295509295509295565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f14578082015181840152602081019050610ef9565b60008484015250505050565b6000610f2b82610eda565b610f358185610ee5565b9350610f45818560208601610ef6565b610f4e81610cd9565b840191505092915050565b60008115159050919050565b610f6e81610f59565b82525050565b6000610140820190508181036000830152610f8f818d610f20565b90508181036020830152610fa3818c610f20565b9050610fb2604083018b610c7b565b610fbf606083018a610c7b565b610fcc6080830189610c7b565b610fd960a0830188610c7b565b610fe660c0830187610c7b565b610ff360e0830186610c7b565b611001610100830185610f65565b61100f610120830184610ca5565b9b9a5050505050505050505050565b7f4f6e6c7920746865206f776e65722063616e2077697468647261770000000000600082015250565b6000611054601b83610ee5565b915061105f8261101e565b602082019050919050565b6000602082019050818103600083015261108381611047565b9050919050565b7f54686572652773206e6f74696e6720746f207769746864726177000000000000600082015250565b60006110c0601a83610ee5565b91506110cb8261108a565b602082019050919050565b600060208201905081810360008301526110ef816110b3565b9050919050565b7f4f6e6c79204f776e65722063616e206b696c6c207468652066756e647261697360008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000611152602283610ee5565b915061115d826110f6565b604082019050919050565b6000602082019050818103600083015261118181611145565b9050919050565b7f66756e64526169736572206973206e6f742061637469766520616e796d6f7265600082015250565b60006111be602083610ee5565b91506111c982611188565b602082019050919050565b600060208201905081810360008301526111ed816111b1565b9050919050565b7f496e76616c69642046756e647261697365722049640000000000000000000000600082015250565b600061122a601583610ee5565b9150611235826111f4565b602082019050919050565b600060208201905081810360008301526112598161121d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112a757607f821691505b6020821081036112ba576112b9611260565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026113227fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826112e5565b61132c86836112e5565b95508019841693508086168417925050509392505050565b6000819050919050565b600061136961136461135f84610b7a565b611344565b610b7a565b9050919050565b6000819050919050565b6113838361134e565b61139761138f82611370565b8484546112f2565b825550505050565b600090565b6113ac61139f565b6113b781848461137a565b505050565b5b818110156113db576113d06000826113a4565b6001810190506113bd565b5050565b601f821115611420576113f1816112c0565b6113fa846112d5565b81016020851015611409578190505b61141d611415856112d5565b8301826113bc565b50505b505050565b600082821c905092915050565b600061144360001984600802611425565b1980831691505092915050565b600061145c8383611432565b9150826002028217905092915050565b61147582610eda565b67ffffffffffffffff81111561148e5761148d610cea565b5b611498825461128f565b6114a38282856113df565b600060209050601f8311600181146114d657600084156114c4578287015190505b6114ce8582611450565b865550611536565b601f1984166114e4866112c0565b60005b8281101561150c578489015182556001820191506020850194506020810190506114e7565b868310156115295784890151611525601f891682611432565b8355505b6001600288020188555050505b505050505050565b7f596f75206e65656420746f2073656e6420736f6d652065746865720000000000600082015250565b6000611574601b83610ee5565b915061157f8261153e565b602082019050919050565b600060208201905081810360008301526115a381611567565b9050919050565b7f46756e647261697365722074617267657420616c72656164792072656163686560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611606602183610ee5565b9150611611826115aa565b604082019050919050565b60006020820190508181036000830152611635816115f9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061167682610b7a565b915061168183610b7a565b92508282019050808211156116995761169861163c565b5b9291505056fea264697066735822122032ad19ab33f83e6d2bcaa0401792936e1198f5d016dd4de9f8b0603c9f5b7d0a64736f6c63430008140033",
    linkReferences: {},
    deployedLinkReferences: {},
  },
] as const;
