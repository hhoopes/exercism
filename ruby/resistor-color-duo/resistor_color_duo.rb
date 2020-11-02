class ResistorColorDuo
  RESISTOR_VALUES = %w(
    black
    brown
    red
    orange
    yellow
    green
    blue
    violet
    grey
    white
  )

  def self.value(colors)
    RESISTOR_VALUES.find_index(colors[0]) * 10 + RESISTOR_VALUES.find_index(colors[1]) 
  end
end