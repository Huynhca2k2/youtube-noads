import moment from 'moment'
import React from 'react'

export default function videoLength({time}) {

    const videoLengthInSeconds = moment()
        .startOf('day')
        .second(time)
        .format('H:mm:ss');

  return (
    <div className='absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs font-medium rounded-md'>
      {videoLengthInSeconds}
    </div>
  )
}
