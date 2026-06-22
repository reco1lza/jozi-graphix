'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const timer = useRef(null)
  const [paused, setPaused] = useState(false)

  const go = useCallback((n) => setIndex(((n % count) + count) % count), [count])
  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => setIndex(i => (i + 1) % count), 4500)
    return () => clearInterval(timer.current)
  }, [paused, count])

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <div className="carousel-slide" key={i}>
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: 'cover' }}
                priority={i === 0}
              />
              <div className="carousel-label">{img.label}</div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Previous image">‹</button>
        <button className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Next image">›</button>
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === index ? 'active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
