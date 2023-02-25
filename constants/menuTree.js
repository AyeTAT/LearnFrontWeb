export const menus = [
  { name: '学习情况', path: '/studyInfo', id: 0, children: [] },
  { name: '题库', path: '/codeTest', id: 1, children: [] },
  {
    name: '学习拓展',
    path: '/stuExtra',
    id: 2,
    children: [
      { name: 'css拓展', path: '/stuExtra/cssStudy', id: 3, children: [] },
      { name: 'js拓展', path: '/stuExtra/jsStudy', id: 4, children: [] },
      { name: 'vue拓展', path: '/stuExtra/vueStudy', id: 5, children: [] },
    ],
  },
]
