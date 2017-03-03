defmodule NucleotideCount do
  @nucleotides [?A, ?C, ?G, ?T]

  @doc """
  Counts individual nucleotides in a NucleotideCount strand.

  ## Examples

  iex> NucleotideCount.count('AATAA', ?A)
  4

  iex> NucleotideCount.count('AATAA', ?T)
  1
  """
  @spec count([char], char) :: non_neg_integer

  def count([], _nucleotide), do: 0
  def count([ h | t ], nucleotide) when h == nucleotide do
    1 + count(t, nucleotide)
  end
  def count([ _h | t], nucleotide), do: count(t, nucleotide)

  def histogram(strand) do
    Map.new @nucleotides, fn(nucleotide) ->
      {nucleotide, count(strand, nucleotide)} 
    end
  end

  @doc """
  Returns a summary of counts by nucleotide.

  ## Examples

  iex> NucleotideCount.histogram('AATAA')
  %{?A => 4, ?T => 1, ?C => 0, ?G => 0}
  """
  @spec histogram([char]) :: map
end
