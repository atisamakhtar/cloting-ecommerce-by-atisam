import React from 'react'
import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

export function urlFor(source: string) {
  return builder.image(source)
}