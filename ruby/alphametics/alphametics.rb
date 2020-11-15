class Alphametics
  class << self
    def solve(puzzle)
      addends, sum = puzzle.split(' == ')
      split_addends = addends.split(' + ')
      unique_chars = puzzle.scan(/\w/).uniq
      solution_set = get_solution_set(unique_chars.sort)

      solution_set.each do |solution|
        next if leading_zero?(solution, split_addends, sum)

        test_sum = sum.gsub(/\w/) { |c| solution[c] }
        test_addends = array_gsub(split_addends, solution)
        return solution if test_sum.to_i == char_sum(test_addends)
      end
      {}
    end

    private

    def leading_zero?(solution, addends, sum)
      solution[sum[0]].zero? || addends.any? { |a| solution[a[0]].zero? }
    end

    def get_solution_set(chars)
      permutations = (0..9).to_a.permutation(chars.size)
      all_solutions = permutations.inject([]) do |memo, c|
        memo << chars.map.with_index { |n, i| [n, c[i]] }.to_h
      end
      all_solutions.select do |solution|
        solution.values.length == solution.values.uniq.length
      end
    end

    def array_gsub(arr, solution)
      arr.map { |string| string.gsub(/\S/) { |c| solution[c] } }
    end

    def char_sum(array_of_strings)
      array_of_strings.sum(&:to_i)
    end
  end
end
