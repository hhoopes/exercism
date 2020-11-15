class Alphametics
  class << self
    def solve(puzzle)
      unique_chars = puzzle.scan(/\w/).uniq
      permutations = (0..9).to_a.permutation(unique_chars.size)
      permutations.each do |p|
        candidate = unique_chars.map.with_index { |char, i| [char, p[i]] }.to_h
        modified_puzzle = puzzle.gsub(/\w/, candidate)
        return candidate if !modified_puzzle.match(/\b0\B/) && eval(modified_puzzle)
      end
      {}
    end
  end
end
