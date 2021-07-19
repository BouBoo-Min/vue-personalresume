let projectData = [
    {
        name: "品优购（仿写）",
        technology: ['HTML', 'CSS', 'JavaScript'],
        miaoshu: '使用原生js代码进行仿写',
        zhize: [
            '在原有的基础上增加了轮播图的功能，并修复其中的两个小bug',
            '使用javascript实现页面交互效果',
        ],
    }, {
        name: "电商后台管理系统（仿写）",
        technology: ['Vue',  'Vue-router', 'Axios', 'echarts'],
        miaoshu: '基于已有的API接口请求数据',
        zhize: [
            '在原来的基础之上完善了仿写项目的功能，使其更加完整',
            '使用vue框架及vue-router构建项目',
            '使用element-ui进行整体的布局',
            '使用axios请求后台数据',
        ]
    }, {
        name: "个人简历",
        technology: ['Vue', 'Vue-router', 'Axios', 'Bootstrip', 'element-ui'],
        miaoshu: '响应式的个人网页简历',
        zhize: [
            '使用vue框架及vue-router构建项目',
            '使用element-ui进行部分的布局',
            '使用bootstrap进行响应式布局',

        ]
    }
]

export const getProjectData = () => {
    return projectData;
}