class Squares
  def initialize(num)
    @num_array = (0..num).to_a
  end

  def square_of_sum
    @num_array.reduce(:+)**2
  end

  def sum_of_squares
    @num_array.reduce(0){|sum, num| sum + num**2 }
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
