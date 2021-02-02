import React from 'react'

const ErrorLog = ({touchErrorLog}) => {
    return ( 
        <div className='error-window'>
            <div className='header-window'>
                <span>error.log</span>
                <div className='right-side'>
                    <span>_</span>
                    <span>&#9633;</span>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => touchErrorLog()}>X</span>
                </div>
            </div>
            <div className='error-content'>
                <div className='error-item'>
                  <p style={{margin: '0px'}}>
                        ["ERROR" - 9:44:36 PM] Error loading node module 'prettier'
                        ["ERROR" - 9:44:36 PM] ENOENT: no such file or directory, open '/Users/ecandotti/Documents/YNOV/challenge48groupv/node_modules/prettier/index.js'
                        Error: ENOENT: no such file or directory, open '/Users/ecandotti/Documents/YNOV/challenge48groupv/node_modules/prettier/index.js'
                        at Object.openSync (fs.js:440:3)
                        at Object.func [as openSync] (electron/js2c/asar.js:140:31)
                        at Object.readFileSync (fs.js:342:35)
                        at Object.fs.readFileSync (electron/js2c/asar.js:542:40)
                        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1050:22)
                        at Module.load (internal/modules/cjs/loader.js:862:32)
                        at Module._load (internal/modules/cjs/loader.js:774:14)
                        at Function.Module._load (electron/js2c/asar.js:769:28)
                        at Function.t._load (/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/services/extensions/node/extensionHostProcess.js:1092:657)
                        at Function.i._load (/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/services/extensions/node/extensionHostProcess.js:1061:334)
                        at Function.n._load (/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/services/extensions/node/extensionHostProcess.js:1057:567)
                        at Module.require (internal/modules/cjs/loader.js:899:19)<br/>
                        <strong>RAM is insufficient execute :</strong> ram -u --info<br/>
                        at r (/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/loader.js:16:346)
                        at t.ModuleResolver.loadNodeModule (/Users/ecandotti/.vscode/extensions/esbenp.prettier-vscode-5.8.0/dist/extension.js:1:8788)
                        at t.ModuleResolver.requireLocalPkg (/Users/ecandotti/.vscode/extensions/esbenp.prettier-vscode-5.8.0/dist/extension.js:1:7919)
                        at t.ModuleResolver.getPrettierInstance (/Users/ecandotti/.vscode/extensions/esbenp.prettier-vscode-5.8.0/dist/extension.js:1:6604)
                        at t.LanguageResolver.getSupportLanguages (/Users/ecandotti/.vscode/extensions/esbenp.prettier-vscode-5.8.0/dist/extension.js:1:4679)
                        at t.LanguageResolver.getSupportedFileExtensions (/Users/ecandotti/.vscode/extensions/esbenp.prettier-vscode-5.8.0/dist/extension.js:1:4511)
                        at t.default.selectors (/Users/ecandotti/.vscode/extensions/esbenp.prettier-vscode-5.8.0/dist/extensio)
                        at Timeout.S [as _onTimeout] (/Users/ecandotti/.vscode/extensions/esbenp.prettier-vscode-5.8.0/dist/extension.js:1:29917)
                        at listOnTimeout (internal/timers.js:531:17)
                        at processTimers (internal/timers.js:475:7)
                    </p>  
                </div>
            </div>
        </div> 
    )

}
 
export default ErrorLog