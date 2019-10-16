import * as skillOlc from 'on-leave-control-glip-bot-skill'
import * as skillTime from 'glip-personal-bot-skill-time'
// import skillPack from 'ringcentral-personal-bot-skill-pack-simple'

export const name = 'Glip personal assistant Bot'
export const description = 'You can set auto reply in on leave control bot setting.'
export const homepage = 'https://github.com/rc-personal-bot-framework/personal-assistant-glip-bot#readme'
// export const skills = [skillFaq, ...skillPack]
export const skills = [skillOlc, skillTime]

function wait (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

export const onPostAdd = async ({
  text, // original text
  textFiltered, // text without metion user
  group,
  user,
  handled, // hanlded by prev skills
  shouldUseSignature // should use signature like "send by bot skill xxx" in message.
}) => {
  if (handled) {
    return false
  }
  console.log(textFiltered, 'textFiltered', text)
  const reg = /^__repeat__( +)(\d+)( +)(.+)$/s
  const arr = textFiltered.match(reg)
  if (!arr) {
    return
  }
  const count = parseInt(arr[2], 10)
  const msg = arr[4]
  if (count <= 0) {
    return
  }
  for (let i = 0; i < count; i++) {
    await user.sendMessage(group.id, {
      text: msg
    })
    await wait(1000)
  }
}
