module.exports = {
	extends: [
		'airbnb-base',
	],
	env: {
		es6: true,
		node: true,
		jest: true,
	},
	globals: {
		__BASE_URL__: true,
		expect: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
		ecmaVersion: 6,
	},
	plugins: ['import'],
	rules: {
		// https://eslint.org/docs/rules/no-underscore-dangle
		'no-underscore-dangle': ['error', { allow: ['__typename'] }],

		// https://eslint.org/docs/rules/no-shadow
		'no-shadow': 'off',

		// https://eslint.org/docs/rules/max-len
		'max-len': [
			'error',
			{
				code: 120,
				tabWidth: 2,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
			},
		],

		// https://eslint.org/docs/rules/semi
		semi: ['error', 'never'],

		// https://eslint.org/docs/rules/linebreak-style
		'linebreak-style': ['warn', 'unix'],

		// https://eslint.org/docs/rules/curly
		curly: 'error',

		// https://eslint.org/docs/rules/camelcase
		camelcase: 'off',

		// https://eslint.org/docs/rules/indent
		indent: [1, 'tab', { SwitchCase: 1 }],

		// https://eslint.org/docs/rules/no-tabs
		'no-tabs': 'off',

		// https://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['error', 'prefer-double'],

		// https://eslint.org/docs/rules/class-methods-use-this
		'class-methods-use-this': ['error', {
			exceptMethods: [
				'render',
				'getInitialState',
				'getDefaultProps',
				'getChildContext',
				'componentWillMount',
				'UNSAFE_componentWillMount',
				'componentDidMount',
				'componentWillReceiveProps',
				'UNSAFE_componentWillReceiveProps',
				'shouldComponentUpdate',
				'componentWillUpdate',
				'UNSAFE_componentWillUpdate',
				'componentDidUpdate',
				'componentWillUnmount',
				'componentDidCatch',
				'getSnapshotBeforeUpdate',
			],
		}],
	},
}
