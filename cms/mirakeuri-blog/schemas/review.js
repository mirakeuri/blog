import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'manga',
      title: 'Manga',
      type: 'reference',
      to: {type: 'manga'},
      hidden: ({document}) => document.type != 'manga',
    }),
    defineField({
      name: 'movie',
      title: 'Movie',
      type: 'reference',
      to: {type: 'movie'},
      hidden: ({document}) => document.type != 'movie',
    }),
    defineField({
      name: 'kdrama',
      title: 'K-drama',
      type: 'reference',
      to: {type: 'kdrama'},
      hidden: ({document}) => document.type != 'kdrama',
    }),
    defineField({
      name: 'anime',
      title: 'Anime',
      type: 'reference',
      to: {type: 'anime'},
      hidden: ({document}) => document.type != 'anime',
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: {type: 'series'},
      hidden: ({document}) => document.type != 'series',
    }),
    defineField({
      name: 'book',
      title: 'Book',
      type: 'reference',
      to: {type: 'book'},
      hidden: ({document}) => document.type != 'book',
    }),
    defineField({
      name: 'character',
      title: 'Character',
      type: 'reference',
      to: {type: 'character'},
      hidden: ({document}) => document.type != 'character',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
