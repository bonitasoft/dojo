Feature: Java POJO generation
	Scenario: a data structure should be transformed in Java
		Given a data structure
			"""
			# Domain representation of product 
			# has an id, a name and an order_code
			M Product
			F id   integer
			F name   text
			F order_code integer
			E
			"""
		When I ask for java POJO generation
		Then I should have the given POJO
			"""
			/**
			 * Domain representation of product
			 * has an id, a name and an order_code
			 */
			public class Product {

				private int id;
				private String name;
				private int orderCode;
			
				public Product() {}
			
				public Product(int id, String name, int orderCode) {
					this.id = id;
					this.name = name;
					this.orderCode = orderCode;
				}
			
				public int getId() {
					return id;
				}
			
				public void setId(int id) {
					this.id = id;
				}
			
				public String getName() {
					return name;
				}
			
				public void setName(String name) {
					this.name = name;
				}
			
				public int getOrderCode() {
					return orderCode;
				}
			
				public void setOrderCode(int orderCode) {
					this.orderCode = orderCode;
				}
			}
			"""

