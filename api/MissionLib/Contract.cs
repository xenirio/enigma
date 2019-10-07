using System;
using System.Collections.Generic;
using System.Text;

namespace MissionLib
{
    public interface IMissionGenerator
    {
        MissionInfo Generate(int major, int minor, int difficulty);
    }
}
