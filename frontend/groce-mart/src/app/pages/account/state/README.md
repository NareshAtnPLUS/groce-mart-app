# Account Store Management

The store of the application created to interact within app and external REST APIs.
This store takes care of the User releated data such as

                            1.Profile

                            2.Orders

                            3.Address
- - - -
## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/) to install NgRx.

```bash
ng add @ngrx/effects @ngrx/entity @ngrx/router-store @ngrx/store @ngrx/store-devtools
```

## Usage
1. After Installing the necessary packages

2. Configure them in app.module.ts

3. Based on the ___Good NgRx Hygine___ create __NgRx Actions__

    1. Create enums for every single action from the component or that might occur from the component

    2. Implement Action class with payloads on neccessary Actions

    3. Export created enums and Action classes of all the Actions that are planned to occur from the components
    
    


## Contributers
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
