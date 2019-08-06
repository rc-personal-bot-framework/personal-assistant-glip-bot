import * as skillOlc from 'on-leave-control-glip-bot-skill'
import * as skillTime from 'glip-personal-bot-skill-time'
// import skillPack from 'ringcentral-personal-bot-skill-pack-simple'

export const name = 'Glip personal assistant Bot'
export const description = 'You can set auto reply in on leave control bot setting.'
export const homepage = 'https://github.com/rc-personal-bot-framework/personal-assistant-glip-bot#readme'
// export const skills = [skillFaq, ...skillPack]
export const skills = [skillOlc, skillTime]
/*
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
  let sign = shouldUseSignature
    ? `\n(send by [${exports.name}](${exports.homepage}))`
    : ''
  console.log(text, textFiltered, group, user, handled, shouldUseSignature)
  if (textFiltered.toLowerCase() === 'hello') {
    await user.sendMessage(group.id, {
      text: 'Hi' + sign
    })
  }
}
*/
