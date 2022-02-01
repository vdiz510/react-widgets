import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Convert = ({ language, text }) => {
  // store translated data
  const [translated, setTranslated] = useState('')
  const [debouncedText, setDebouncedText] = useState(text)

  // useEffect #1: Debounce text
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 500)

    // clean up function
    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  // useEffect #2: Make request to GoogleAPI
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      })
      setTranslated(data.data.translations[0].translatedText)
    }
    // invoke function
    doTranslation()

  }, [language, debouncedText])


  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}

export default Convert;