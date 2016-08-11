class Hamming
  def calculate_difference(strand_1, strand_2)
    strand_1.split("").zip(strand_2.split("")).reject do |pair|  # => [["A", "A"], ["C", "C"], ["G", "G"], ["T", "T"]], [["A", "A"], ["C", "C"], ["C", "G"], ["T", "T"]], [["A", "A"], ["C", "C"], ["C", "G"], ["A", "T"]], [["A", "A"], ["C", "C"], ["G", "G"], ["T", "T"], ["A", "C"], ["C", "G"], ["G", "T"], ["T", "A"], ["A", "C"], ["C", "T"], ["T", "A"], ["C", "C"], ["A", "G"]]
      pair.first == pair.last                                    # => true, true, true, true, true, true, false, true, true, true, false, false, true, true, true, true, false, false, false, false, false, false, false, true, false
    end.length                                                   # => 0, 1, 2, 8
  end                                                            # => :calculate_difference

end  # => :calculate_difference

hamming = Hamming.new                                           # => #<Hamming:0x007fe62b971698>
hamming.calculate_difference("ACGT", "ACGT")                    # => 0
hamming.calculate_difference("ACCT", "ACGT")                    # => 1
hamming.calculate_difference("ACCA", "ACGT")                    # => 2
hamming.calculate_difference("ACGTACGTACTCA", "ACGTCGTACTACG")  # => 8
