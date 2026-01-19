const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        const activeAudio = document.getElementById(sound)
        activeAudio.play()

        // Add active class to the clicked button
        btn.classList.add('active')

        // Remove active class when audio ends
        activeAudio.onended = () => {
            btn.classList.remove('active')
        }
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(btn => btn.classList.remove('active'))
}