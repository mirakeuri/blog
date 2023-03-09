import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'manga',
  title: 'Manga',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
