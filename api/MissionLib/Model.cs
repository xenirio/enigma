using System;
using System.Collections.Generic;
using System.Text;

namespace MissionLib
{
    public class MissionInfo
    {
        public int Major { get; set; }
        public int Minor { get; set; }
        public int Difficulty { get; set; }

        public List<int> Answer { get; set; }
        
        public List<Rotor> Rotors { get; set; }
    }

    public class Rotor
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int NumberOfTick { get; set; }
        public int CurrentState { get; set; }
        public List<int> AffectTo { get; set; }
    }
}
