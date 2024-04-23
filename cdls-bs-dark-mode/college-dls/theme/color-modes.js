/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'
  // console.log('color modes start');
  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)
  const iframeObj = document.querySelector('.Preview-iframe')
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    var iframeContentWindow = undefined
    const iframeObj = document.querySelector('.Preview-iframe')

    if (iframeObj) {
      iframeContentWindow = document.querySelector('.Preview-iframe').contentWindow
    }
    if (theme === 'auto') {
      const themeValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-bs-theme', themeValue)
      if (iframeContentWindow) {
        iframeContentWindow.document.querySelector("html").setAttribute('data-bs-theme', themeValue)
      }
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
      if (iframeContentWindow) {
        iframeContentWindow.document.querySelector("html").setAttribute('data-bs-theme', theme)
      }
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const chkMarkToActive = btnToActive.querySelector('svg.check')
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
      element.children[1].classList.add('d-none')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    chkMarkToActive.classList.remove('d-none')
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  if (iframeObj != undefined) {
    document.querySelector('.Preview-iframe').onload = function() {
      const theme = getStoredTheme()
      setTheme(theme)
      showActiveTheme(theme, true)
    }
  }


  window.addEventListener('DOMContentLoaded', () => {
    console.log("show active theme: " + getPreferredTheme())
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })

  var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  
    return function( obj, callback ){
      if( !obj || obj.nodeType !== 1 ) return; 
  
      if( MutationObserver ){
        // define a new observer
        var mutationObserver = new MutationObserver(callback)
  
        // have the observer observe for changes in children
        mutationObserver.observe( obj, { childList:true, subtree:true })
        return mutationObserver
      }
      
      // browser support fallback
      else if( window.addEventListener ){
        obj.addEventListener('DOMNodeInserted', callback, false)
        obj.addEventListener('DOMNodeRemoved', callback, false)
      }
    }
  })()

  const mutEle = document.querySelector('.Frame-body')
  // Observe a specific DOM element:
  observeDOM( mutEle, function(m){
    for (const mutation of m) {
      const targetClass = mutation.target.getAttribute('class')
      // console.log(mutation.target.getAttribute('class'))

      if ((targetClass == "Pen-preview-size") || (targetClass == "Frame-inner")) {

        const theme = getStoredTheme()
        setTheme(theme)
        showActiveTheme(theme, true)
    
        document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
      }
    }
  });
})()
