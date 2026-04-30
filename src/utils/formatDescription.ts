export const formatDescription = (description: string): string => {
  if (!description) return ''

  const chapterRegex = /^(\d{1,2}:\d{2}(?::\d{2})?)\s+(.+)$/

  const urlRegex = /(https?:\/\/[^\s]+)/g

  const lines = description.split('\n')

  const chapters: { time: string; label: string }[] = []
  const otherLines: string[] = []

  lines.forEach((line) => {
    const chapterMatch = line.match(chapterRegex)
    if (chapterMatch) {
      chapters.push({ time: chapterMatch[1], label: chapterMatch[2] })
    } else {
      otherLines.push(line)
    }
  })

  const formatLine = (line: string): string => {
    return line.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
    })
  }

  const paragraphs = otherLines
    .reduce((acc: string[][], line) => {
      if (line.trim() === '') {
        acc.push([])
      } else {
        if (acc.length === 0) acc.push([])
        acc[acc.length - 1].push(formatLine(line))
      }
      return acc
    }, [[]])
    .filter((group) => group.length > 0)
    .map((group) => `<p>${group.join('<br>')}</p>`)
    .join('')

  const chaptersHtml = chapters.length > 0
    ? `<div class="description-chapters">
        <h3 class="description-chapters__heading">Chapters</h3>
        <ol class="description-chapters__list">
          ${chapters.map(({ time, label }) =>
            `<li class="description-chapters__item">
              <span class="description-chapters__time">${time}</span>
              <span class="description-chapters__label">${label}</span>
            </li>`
          ).join('')}
        </ol>
      </div>`
    : ''

  return `<h2 class="description-heading">Description</h2>${paragraphs}${chaptersHtml}`
}