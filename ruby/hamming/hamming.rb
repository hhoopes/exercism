class Hamming
  def self.compute(strand_one, strand_two)
    raise ArgumentError unless strand_one.length == strand_two.length
    strand_one.split("").zip(strand_two.split("")).reject do | pair |
      pair.first == pair.last
    end.length
  end
end                                                               
