			
			var targetNumber = Math.floor(Math.random() * 40) + 20;

			$("#number-to-guess").text(targetNumber);
			
			var counter = 0;
			var wins = 0;
			var losses = 0;
			
			var numberOptions = [(Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1)];
			
			var listOfPictures = ["https://jaysanalysis.files.wordpress.com/2014/11/fantasy-crystal2.jpg","http://media.beliefnet.com/~/media/photos/holistic-living/galleries/7-crystals-you-need-to-bring-love-into-your-love-life/crystals_intro.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Amethystemadagascar2.jpg/1200px-Amethystemadagascar2.jpg","https://www.bing.com/th?id=OIP.4tfapE0xOrdo7rZnfFqWCwHaE8&w=244&h=162&c=7&o=5&pid=1.7"]
			
			for (var i = 0; i < numberOptions.length; i++) {
			
				var imageCrystal = $("<img>");
			
				imageCrystal.addClass("crystal-image");
			
				imageCrystal.attr("src", listOfPictures[i]);
			 
			
			
				imageCrystal.attr("data-crystalvalue", numberOptions[i]);
			
			
				$("#crystals").append(imageCrystal);
			
			
			}
				
			
			$(".crystal-image").on("click", function() {
			
			
			
				var crystalValue = ($(this).attr("data-crystalvalue"));
			
				crystalValue = parseInt(crystalValue);
			
			
			
				
			
					counter += crystalValue;
			
				alert("New score: " + counter);
			
				if (counter === targetNumber) {
					alert("You win!");
					wins++;
					$("#win-lose").html("<h2>Winner!</h2>");
					$("#wins").html("<h3>" + wins + "</h3>");
					for (var i = 0; i < 4; i++) {
						$("crystals")[i].attr("data-crystalvalue", Math.floor(Math.random()*10) + 1);
						alert("Refresh to Play Again!");
					}
				counter = 0;
				}
			
				else if (counter >= targetNumber) {
					alert("You lose!!");
					losses++;
					$("#win-lose").html("<h2>You lost..</h2>");
					$("#losses").html("<h3>" + losses + "</h3>");
					for (var i = 0; i < 4; i++) {
						$("crystals")[i].attr("data-crystalvalue", Math.floor(Math.random()*10) + 1);
			
					alert("Refresh to Play Again!");
					}
				counter = 0;
				}
			
			
			});