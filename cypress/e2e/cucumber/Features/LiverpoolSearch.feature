Feature: I want to Validate the Search Bar

Background: Validate the Search bar of the Liverpool website
 Given I navigate to the Liverpool website



 Scenario: Search for a Playstation and verify the results
      When I want to search a product
      And I enter "playstation" in the search bar
      And I press the search button
      Then I see search results for "playstation" related items
      And I see the title and price of the item on the displayed page
	

# # ------------------------------------------------------------------------------------------------------------------------
	
# Scenario 2

   Scenario: Search for a Smart TV and verify the results
     When I want to search a product
     And I enter "Smart TV" in the search bar
     And I press the search button
     Then I filter the results by size "55" inches
     And I filter the results by price "> 10,000"
     And I filter the results by brand "Sony"
	And Count the number of results
	
	
# # ------------------------------------------------------------------------------------------------------------------------

# Scenario 3


# Feature: Navigate and filter items in the "Categorias" menu

   Scenario: Filter men's perfumes by Dior brand
    When I want to search a product in the categorias menu
     And I place the cursor over the Belleza option
     And I select the Perfumes de Hombre option in the displayed menu
     When I filter the results by "Dior" brand