# eslint-plugin-pirosikick

The custom rules created by pirosikick

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-pirosikick`:

```
$ npm install eslint-plugin-pirosikick --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-pirosikick` globally.

## Usage

Add `pirosikick` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "pirosikick"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "pirosikick/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





