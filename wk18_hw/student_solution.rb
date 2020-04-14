# #1. Print "Hello World" to the console

# puts "Hello World"

# #2. Interpolate the adjective variable into the Hello World string using #{}

# adjective = "Big Bad"

# puts "Hello #{adjective} World"

# # 3. Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to all uppercased letters.

# greet = "Hello World".upcase!
# puts greet

# # NUMS ARRAY AND ENUMERABLES

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# #1. Use .uniq to print the array with all duplicate entries removed
# p nums.uniq

# #2. Next, use .push and .pop , .shift .unshift and .length on the array as you would with javaScript (if you need to add a number, add 5)
# nums.push(42)
# p "Array after push: #{nums}"

# nums.pop()
# p "Array after pop: #{nums}"

# nums.shift()
# p "Array after shift: #{nums}"

# nums.unshift(77)
# p "Array after unshift #{nums}"

# #3. Use .include? to check if the array contains the number 8
# p nums.include?(8)

# #4. Use .find_all to find all the numbers greater than 10
# p nums.find_all { |i| i > 10}

# #5. use .all? to check if all the numbers are greater than 0?
# p nums.all? {|i| i > 0}

# #6. use any? to check if there are any numbers that are divisible by 8
# p nums.any? {|i| i % 8 == 0}

# #7. use .count to let you know how many numbers are greater than 4
# p nums.count {|i| i > 4}

# #8. use .each_with_index to print each item times its index
# nums.each_with_index do |value, index|
#     puts index * value
# end

# #9. .find the number that is divisible by 7 and 5 and is greater than 0
# p nums.find {|i| i > 0 && i % 7 == 0 && i % 5 == 0}

# #10. .find_index of the number that is divisible by 5 and 7 and is greater than 0
# p "index of number divisible by 5, 7 and greater than 0: #{nums.find_index {|i| i > 0 && i % 7 == 0 && i % 5 == 0}}"

# #11. return the .first 3 numbers
# p "first 3 numbers: #{nums.first(3)}"

# #12. return the .last 5 numbers
# p "last 5 numbers: #{nums.last(5)}"

# #13. .group_by the modulo of 3 ( % 3 )
# p nums.group_by {|i| i % 3}

# #14. use minmax to return the smallest and largest number
# p nums.minmax

# #15. use .reject to return all the numbers that are NOT divisible by 3
# p nums.reject {|i| i % 3 == 0}

# #16. use .select to return all the numbers divisible by 5
# p nums.select {|i| i % 5 == 0}


#Color Array

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# Print out a random color.
p colors.sample

# Print out the colors array in reverse order.
p colors.reverse

# Print out all of the colors in the array with all capital letters.
puts colors.select {|color| color.upcase!}
# OR: puts colors.map(&:upcase)
