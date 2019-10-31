

InboxSDK.loadScript('https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js')
InboxSDK.loadScript('https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js');
InboxSDK.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
InboxSDK.loadScript('https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js');






// Get an Inbox SDK App Id from here: https://www.inboxsdk.com/register
InboxSDK.load('1.0', 'sdk_pizone_3e3903636d').then(function(sdk){

  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler(function(composeView){

    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "Template 1",
      iconUrl: chrome.extension.getURL('favicon.ico'),
      onClick: function(event) {
        event.composeView.insertTextIntoBodyAtCursor('I thought you may be interested in The Pocket Writer’s Guide, a new book that may benefit your readersPlease let me know if you are interested in seeing a copy or would be interested in speaking with the author, Susan Barnes. I am including the text of our press release in an attachment.I look forward to hearing from you')
      },
    });
    composeView.addButton({
      title: "Template 2",
      iconUrl: chrome.extension.getURL('favicon.ico'),
      onClick: function(event) {
        event.composeView.insertTextIntoBodyAtCursor('ActiveCampaign is a full-service ESP that provides sending services, marketing automation, email templates and an email designer tool. You can access their free template library after creating an account. To find their templates once logged in, click on the Campaigns tab, then on “Email Templates” on the right side of the screen. Their library includes 52 email templates that range in complexity and design.')
      },
    });
  });
});
