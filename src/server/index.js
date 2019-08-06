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
  function wait (time) {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
  }
  console.log(text, textFiltered, group, user, handled, shouldUseSignature)
  if (textFiltered.toLowerCase() === '__api_test__') {
    // do api test
    for (let i = 0; i < 10; i++) {
      // glip chats
      await user.rc.get('/restapi/v1.0/glip/chats').catch(console.log)
      // await user.rc.get('/restapi/v1.0/account/~/extension/~/address-book/contact')
      await user.rc.get('/restapi/v1.0/account/~/extension/~').catch(console.log)
      await user.rc.get('/restapi/v1.0/account/~/extension/~/message-store').catch(console.log)
      await user.rc.get('/restapi/v1.0/account/~/extension/~/presence').catch(console.log)
      await user.rc.get('/restapi/v1.0/glip/webhooks').catch(console.log)
      await wait(60 * 1000)
      console.log('done:', i)
    }
  }
}
*/
