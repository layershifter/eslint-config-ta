module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true,
  },
  'rules': {
    /**
     * React Plugin
     * https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
     */
    // Prevent missing displayName in a React component definition
    'react/display-name': 0,
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 2,
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': 2,
    // Enforce or disallow spaces inside of curly braces in JSX attributes.
    'react/jsx-curly-spacing': 2,
    // Validate props indentation in JSX
    'react/jsx-indent-props': [2, 2],
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 0,
    // Prevent duplicate properties in JSX
    'react/jsx-no-duplicate-props': 2,
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 0,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-prop-types': 2,
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 1,
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // Prevent multiple component definition per file
    'react/no-multi-comp': 2,
    // Prevent usage of setState
    'react/no-set-state': 0,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // Restrict file extensions that may be required
    'react/require-extension': [2, {
      'extensions': ['.js']
    }],
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 2,
    // Enforce component methods order
    'react/sort-comp': 2,
    // Prevent missing parentheses around multiline JSX
    'react/wrap-multilines': 2,
  }
};