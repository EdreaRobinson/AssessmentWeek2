var array = [{ category: 'Business', users: [{ name: 'Sally', tags: [{ tag: 'accounting' }, { tag: 'marketing' }] }, { name: 'Bob', tags: [{ tag: 'sales' }, { tag: 'accounting' }] }] }, { category: 'Heritage', users: [{ name: 'Linda', tags: [{ tag: 'Italy' }, { tag: 'Macedonia' }] }, { name: 'George', tags: [{ tag: 'South Africa' }, { tag: 'Chile' }] }] }],
    tag = 'marketing',
    result = array.filter(a => a.users.some(u => u.tags.some(t => t.tag.includes(tag))));

console.log(result);