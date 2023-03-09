import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kdrama',
  title: 'K-Drama',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
