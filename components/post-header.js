import Avatar from '../components/avatar'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
        <CoverImage 
          title={title} 
          src={coverImage} 
          height={240}
          width={320}
        />
      </div>
    </>
  )
}
