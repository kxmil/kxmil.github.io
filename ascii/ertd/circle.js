/**
@author ertdfgcvb
@title  Hotlink
@desc   Function hotlink example (GitHub)
        The code for the Open Simplex Noise function is downloaded from GitHub
        and evaluated through “new Function()”.
*/

// Don’t do this :)
fetch("https://raw.githubusercontent.com/blindman67/SimplexNoiseJS/master/simplexNoise.js")
.then(e => e.text())
.then(e => {
	const openSimplexNoise = new Function("return " + e)()
	noise3D = openSimplexNoise(Date.now()).noise3D
})

// Stub function
function noise3D() { return 0 }

const density = 'eyes dont lies'

export function main(coord, context, cursor, buffer) {
  // Use cursor speed to determine time
  const t = context.time * 0.00005
	const s = 0.03
	const x = coord.x * s
	const y = coord.y * s / context.metrics.aspect + t
	const i = Math.floor((noise3D(x, y, t) * 0.5 + 0.5) * density.length)
	return {
    char: density[i],
    color: 'rgb(137, 136, 136)',
  }
}
