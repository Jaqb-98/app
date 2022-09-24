module.exports = {
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: '2018',
	},
	env: {
		browser: true,
	},
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended'],
	rules: {
		'comma-dangle': [
			'error',
			{
				functions: 'always-multiline',
				objects: 'always-multiline',
				arrays: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
			},
		],
		curly: 'warn',
		'keyword-spacing': [
			'warn',
			{
				before: true,
				after: true,
			},
		],
		'linebreak-style': ['error', 'unix'],
		'no-case-declarations': 'off',
		'no-undef': 'off',
		'no-console': ['error', { allow: ['warn', 'assert'] }],
		'no-unused-vars': 'off',
		'no-var': 'warn',
		'object-curly-spacing': ['error', 'always'],
		'prefer-const': 'warn',
		semi: ['error', 'never'],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'@typescript-eslint/interface-name-prefix': ['off'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
				},
				singleline: {
					delimiter: 'comma',
				},
			},
		],
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
		'@typescript-eslint/type-annotation-spacing': 'off',
		'no-trailing-spaces': 'error',
		'@typescript-eslint/indent': ['error', 'tab', {
			SwitchCase: 0,
		}],
		'key-spacing': ['error', { mode: 'strict' }],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true,
			},
		],
		'max-len': ['error', {
			code: 120,
			tabWidth: 4,
			ignorePattern: '(webpackChunkName:)|(^import)',
		}],
		'arrow-spacing': [
			'warn',
			{
				before: true,
				after: true,
			},
		],
		'eqeqeq': ['warn', 'always'],
		'space-before-blocks': ['warn', 'always'],
		'comma-spacing': [
			'warn',
			{
				before: false,
				after: true,
			},
		],
		'no-mixed-spaces-and-tabs': 'warn',
		'no-dupe-else-if': 'error',
		'no-setter-return': 'error',
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always',
		}],
		'no-multi-spaces': ['error'],
		'space-infix-ops': ['error'],
	},
}
