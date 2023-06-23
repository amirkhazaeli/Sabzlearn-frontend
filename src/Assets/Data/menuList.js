const menuList = [
    {
        id: 1,
        menuName: 'فرانت اند',
        href: '/category/front',
        subMenus: [
            {
                id: 1,
                courseName: 'آموزش React',
                href: '/productInfo/4',
            },
            {
                id: 2,
                courseName: 'آموزش Redux',
                href: '/productInfo/5',
            },
            {
                id: 3,
                courseName: 'آموزش Next.js',
                href: '/productInfo/6',
            },
            {
                id: 4,
                courseName: 'آموزش جامع Css3',
                href: '/productInfo/15',
            },
        ]
    },
    {
        id: 2,
        menuName: 'امنیت',
        href: '/category/security',
        subMenus: [
            {
                courseName: 'اموزش لینوکس با گرایش امنیت',
                href: '/productInfo/1',
            },
        ]
    },
    {
        id: 3,
        menuName: 'بک اند',
        href: '/category/backend',
        subMenus: [
            {
                courseName: 'آموزش پایتون رایگان',
                href: '/productInfo/3',
            },
            {
                courseName: 'آموزش حرفه ای NodeJS ',
                href: '/productInfo/2',
            },
        ]
    },
    {
        id: 4,
        menuName: 'مهارت نرم',
        href: '/category/softSkill',
        subMenus: []
    },
    {
        id: 5,
        menuName: 'مقالات',
        href: '/article',
        subMenus: []
    },

]

export default menuList