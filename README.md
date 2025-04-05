# JS Commission Calculator

This js application calculates commission fees for cash in and cash out operations.

## Complete Guide :book:

### Install dependencies:

   ```sh
   npm i
   ```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

### Running:

   ```sh
   npm run start
   ```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

### Testing:

#### Run all tests 

   ```sh
   npm test
   ```

#### Run specific tests:

1. Run tests for utils
   ```sh
   npm run test:utils
   ```

2. Run tests for services
   ```sh
   npm run test:services
   ```
   
3. Run integration tests
   ```sh
   npm run test:integration
   ```

4. Run specific file with tests
   ```sh
   npm run test:file ./tests/path/to/file/testName.test.js
   ```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

### Linting:
This project uses ESLint to maintain code quality and enforce coding style. The configuration is based on the <a href="https://github.com/airbnb/javascript">Airbnb style guide</a> and includes few additional plugins for import sorting and handling Chai assertions.

The ESLint configuration is defined in the `.eslintrc.cjs` file.

### Running the Linter

1. Run ESLint to check for code style issues with:
   ```sh
   npm run lint
   ```

2. If you want ESLint to automatically fix issues where possible, run:

   ```sh
   npm run lint:fix
   ```