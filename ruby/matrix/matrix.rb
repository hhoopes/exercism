class Matrix
  attr_reader :rows, :columns

  def initialize(matrix_text)
    @rows = get_rows(matrix_text)
    @columns = @rows.transpose
  end

  private

  def get_rows(matrix_text)
    matrix_text.lines.map { |l| l.split.map(&:to_i) }
  end
end