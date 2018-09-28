db.orders.mapReduce(
            function() {
                emit(this.cust_id, this.amount); 
            }; 
            
            function(key, values) {
                return Array.sum(values)
            }, 
            
            {
                query: { 
                    status: "A", 
                },
                out: "order_totals"
            }
)
                
