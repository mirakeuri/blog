import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'anime',
  title: 'Anime',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
