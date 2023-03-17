# Banking System

A cli package which can be used in banking system to operate users account and provide them various functionalities like deposit money, withdraw money, make fds and many more. Users data is stored in their corresponding accounts by hashing their passwords and pin. Proper authentication is used at various stages to secure the system from hackers/intruder.




## Tech Stack



Server:  `Node.js` `Express.js` `MongoDB` `Javascript` 

Client: `commander.js` `inquirer.js` `bcrypt.js`




## Installation

1. First install banking system package globally in your system :

```bash
  npm install -g banking-system
```

2. Now to become familiar with this package run help command :
```bash
    banking-system help
```

### Screenshot
![alt text](https://github.com/muskandn/bio_init_/blob/main/images/help.png?raw=true)


```bash
Options:
  -h, --help      display help for command

Commands:
  start|s         home page
  register|r      User has been registed
  login|l         User has been logged in
  balance|b       Bank balance is printed.
  withdrawal|w    Given amount has been withdrawaled.
  deposit|d       Amount is deposited.
  transfer|t      Amount has been transfered.
  pin|p           Pin has been updated.
  history|h       History is printed.
  fd|f            Make fd
  delete|del      Account is deleted.
  help [command]  display help for command
```

3. To start interacting with this package run given command :
```bash
    banking-system start
```

### Screenshot
![alt text](https://github.com/muskandn/bio_init_/blob/main/images/start.png?raw=true)

To create an account :
```bash
    banking-system register
```

### Screenshot
![alt text](https://github.com/muskandn/bio_init_/blob/main/images/registration.png?raw=true)

PassBook

![alt text](https://github.com/muskandn/bio_init_/blob/main/images/passbook.png?raw=true)

To logged in an existing account :
```bash
    banking-system login
```

### Screenshot
![alt text](https://github.com/muskandn/bio_init_/blob/main/images/login.png?raw=true)

### Features
bash
1. Withdraw
2. Deposit
3. Check balance
4. Transfer money
5. Change pin
6. Transactions history
7. Fd
8. Delete account
9. Exit



### Commands
| Commands            | Description                                                              |
| ----------------- | ------------------------------------------------------------------ |
| banking-system withdrawal/w | Given amount has been withdrawaled. |
| banking-system deposit/d |  Amount is deposited.|
| banking-system balance/b |  Bank balance is printed.|
| banking-system transfer/f | Amount has been transfered. |
| banking-system pin/p |  Pin has been updated.|
| banking-system history/h |  History is printed.|
| banking-system fd/f |  Make fd|
| banking-system delete/del |  Account is deleted.|

## Advantage 
The user need not to run particular commands that correspond to the requirements.
The system is fully automated, and users only need to choose from the given options that best suit their needs.


## Authors
- [muskandn](https://github.com/muskandn)
- [SakshiGoyat](https://github.com/SakshiGoyat)
