﻿#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; windows logo + r to Reload Script
#r::Reload

; map PrintScreen to ctrl+F8
PrintScreen::
    Keywait, PrintScreen
    Send ^{F8}
Return

;zoom in top right corner
;bug -> if we are in text mode(sublime) and press F11 a plus sign is added after the operation is finished
F11::
   CoordMode, Mouse, Screen
   MouseMove, 2560, 0
   Send #{+}
   Sleep 400
   MouseMove, 2060, 450
Return

; map ctrl+j to movement of the mouse to 1024, 500 and getting back to initial position
;^j::
;CoordMode, Mouse, Screen
;  MouseGetPos, xpos, ypos
;  Click 1024, 500
;  MouseMove, xpos, ypos
;Return


;Always On Top for Sublime only - Win + s
#IfWinActive, ahk_class SKMainWindowClass
#s:: Winset, Alwaysontop, , A
return
#IfWinActive

;/////////////////// ShareX application ////////////////////
; Ctrl+j
^j::
  CoordMode, Mouse, Screen
  MouseMove, 0, 0
  Send {PrintScreen}Q
  Sleep 200
  MouseMove, 790, 667
  Click down
  Sleep 200
  MouseMove, 1767, 1012
  Click up
Return

; Ctrl+k
^k::
  CoordMode, Mouse, Screen
  MouseMove, 0, 0
  Send {PrintScreen}
  Sleep 200
  MouseMove, 790, 130
  Click down
  Sleep 200
  MouseMove, 1767, 1345
  Click up
Return

; Ctrl+d
^d::
  Loop, 5
  Send, ^{down}
Return

; Ctrl+u
^u::
  Loop, 5
  Send, ^{up}
return
;/////////////////// ShareX application ////////////////////

; CTRL + Alt + T to run C:\Windows\system32\cmd.exe
^!t::
Run %comspec% /k
return
