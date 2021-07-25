import chalk from 'chalk'

let __now = new Date()

let date = ('0' + __now.getDate()).slice(-2)

let month = ('0' + (__now.getMonth() + 1)).slice(-2)

let year = __now.getFullYear()

let hours = __now.getHours()

let minutes = __now.getMinutes()

let seconds = __now.getSeconds()

var _now = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`

var now = chalk.white('[ ' + _now + ' ] ')

/**
 * Log Warn in console
 * @param s
 */

export async function loggerWarn(s: string) {
  console.log(now + chalk.yellow(s))
}

/**
 * Log Error in console
 * @param s
 */

export async function loggerError(s: Error) {
  console.log(now + chalk.blue(s))
}

/**
 * Log Info in console
 * @param s
 */

export async function loggerInfo(s: string) {
  console.log(now + chalk.cyan(s))
}
