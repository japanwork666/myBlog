module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:nuxt/recommended', // Nuxt.js 官方推薦規則
        'plugin:prettier/recommended', // prettier 推薦規則
    ],
    plugins: [],
    ignorePatterns: ['*.config.js'
    ], // 在這裡添加要忽略的文件模式
    rules: {
        // 與 prettier 保持一致
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                quoteProps: 'consistent',
                usePrettierrc: true
            }
        ],
        // 空格和縮進
        'indent': [
            'error',
            2,
            {
                SwitchCase: 1
            }
        ],
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        // 引號和字符串
        'quotes': ['error', 'single'
        ],
        'quote-props': ['error', 'consistent-as-needed'
        ],
        'prefer-template': 'error',
        // 分號
        'semi': ['error', 'always'
        ],
        // 命名約定
        'camelcase': 'error',
        // 禁止使用 var 關鍵字
        'no-var': 'error',
        // 禁止未使用的變量
        'no-unused-vars': 'error',
        // 箭頭函數的使用
        'arrow-spacing': ['error',
            {
                before: true, after: true
            }
        ],
        'arrow-parens': 'off',
        'arrow-body-style': ['error', 'as-needed'
        ],
        // 代碼塊前後空格
        'block-spacing': 'error',
        'space-before-blocks': 'error',
        'space-in-parens': ['error', 'never'
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always', named: 'never', asyncArrow: 'always'
            }
        ],

    }
};