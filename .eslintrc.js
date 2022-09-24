module.exports = {
	extends: ['./.eslintrc.base.js', 'plugin:vue/recommended'],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'mocha-no-only',
		'vue-scoped-css',
	],
	ignorePatterns: ['assets/scripts/*'],
	rules: {
		'vue/attributes-order': [
			'warn',
			{
				order: [
					'TWO_WAY_BINDING',
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					'UNIQUE',
					'OTHER_ATTR',
					'SLOT',
					'EVENTS',
					'CONTENT',
				],
			},
		],
		'vue/attribute-hyphenation': ['error', 'never', {
			ignore: [
				'text-anchor',
			],
		}],
		'vue/max-attributes-per-line': ['error', {
			singleline: 5,
			multiline: 1,
		}],
		'vue/first-attribute-linebreak': ['error', {
			singleline: 'ignore',
			multiline: 'below',
		}],
		'vue/require-v-for-key': 'off',
		'vue/prop-name-casing': ['error', 'camelCase'],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/html-indent': [
			'error',
			'tab',
			{
				alignAttributesVertically: false,
			},
		],
		'vue/html-self-closing': [
			'warn',
			{
				html: {
					void: 'always',
					normal: 'always',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			},
		],
		'vue/custom-event-name-casing': 'off',
		'vue/html-closing-bracket-newline': [
			'warn',
			{
				singleline: 'never',
				multiline: 'always',
			},
		],
		'vue/html-closing-bracket-spacing': [
			'warn',
			{
				startTag: 'never',
				endTag: 'never',
				selfClosingTag: 'always',
			},
		],
		'vue/arrow-spacing': [
			'warn',
			{
				before: true,
				after: true,
			},
		],
		'vue/eqeqeq': ['warn', 'always'],
		'vue/this-in-template': ['error', 'never'],
		'mocha-no-only/mocha-no-only': ['error'],
		'vue/v-slot-style': ['error', 'longform'],
		'vue/valid-v-slot': 'error',
		'vue-scoped-css/require-scoped': 'error',
		'vue-scoped-css/no-unused-selector': 'error',
		'vue/one-component-per-file': 'off',
		'vue/multi-word-component-names': 'off',
	},
}
