class Complement
  COMPLEMENTS = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
  }

  def self.of_dna(base_letters)
    base_letters.chars.map do | base_letter |
      # require 'pry'; binding.pry
      return "" if COMPLEMENTS[base_letter.to_sym].nil?
      COMPLEMENTS[base_letter.to_sym]
    end.join
  end
end
