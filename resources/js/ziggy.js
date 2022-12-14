const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"password.confirm":{"uri":"user\/confirm-password","methods":["POST"]},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"]},"two-factor.enable":{"uri":"user\/two-factor-authentication","methods":["POST"]},"two-factor.confirm":{"uri":"user\/confirmed-two-factor-authentication","methods":["POST"]},"two-factor.disable":{"uri":"user\/two-factor-authentication","methods":["DELETE"]},"two-factor.qr-code":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"]},"two-factor.secret-key":{"uri":"user\/two-factor-secret-key","methods":["GET","HEAD"]},"two-factor.recovery-codes":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"account.profile":{"uri":"account\/profile","methods":["GET","HEAD"]},"account":{"uri":"account","methods":["GET","HEAD"]},"accountaccount.security":{"uri":"account\/security","methods":["GET","HEAD"]},"account.password":{"uri":"account\/password","methods":["PUT"]},"account.preferences":{"uri":"account\/preferences","methods":["GET","HEAD"]},"posts.index":{"uri":"posts","methods":["GET","HEAD"]},"posts.create":{"uri":"posts\/create","methods":["GET","HEAD"]},"posts.store":{"uri":"posts","methods":["POST"]},"posts.show":{"uri":"posts\/{post}","methods":["GET","HEAD"]},"posts.edit":{"uri":"posts\/{post}\/edit","methods":["GET","HEAD"],"bindings":{"post":"id"}},"posts.update":{"uri":"posts\/{post}","methods":["PUT","PATCH"],"bindings":{"post":"id"}},"posts.destroy":{"uri":"posts\/{post}","methods":["DELETE"]},"welcome":{"uri":"\/","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };