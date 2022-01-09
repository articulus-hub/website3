var sheetName = 'Sheet1'
		var scriptProp = PropertiesService.getScriptProperties()

		function intialSetup () {
		  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
		  scriptProp.setProperty('key', activeSpreadsheet.getId())
		}

		function doPost (e) {
		  var lock = LockService.getScriptLock()
          
		  lock.tryLock(10000)

		  try {
             
			var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
			var sheet = doc.getSheetByName(sheetName)

			var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
			var nextRow = sheet.getLastRow() + 1

			var newRow = headers.map(function(header) {
			  return header === 'timestamp' ? new Date() : e.parameter[header]
			})
           
			sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])
            var name = e.parameter["Name"], attendance = e.parameter["Attendance"], how = e.parameter["Contact from"], body = "";   
            if(attendance == "Yes")
            {
              body = "Hey Rakshit, \n \t"+name+" whom you know from "+how+" has RSVPed as Yes! Cheers.";
            }   
            else if(attendance == "No")
            {
              body = "Hey Rakshit, \n \t"+name+" whom you know from "+how+" has RSVPed as No.";
            }         
            MailApp.sendEmail("skrakesh5@gmail.com", "Response for invitation", body);
            
			return ContentService
			  .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
			  .setMimeType(ContentService.MimeType.JSON)
            
		  }

		  catch (e) {
			return ContentService
			  .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
			  .setMimeType(ContentService.MimeType.JSON)
		  }

		  finally {
			lock.releaseLock()
		  }
		}
